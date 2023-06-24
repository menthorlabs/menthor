import validators from "../../../packages/utils/validators";

export function useFormValidator() {
  function allRules(required, rules) {
    if (required && !rules.includes("required")) {
      return ["required", ...rules];
    }

    return rules;
  }

  function validate(value, rules) {
    const errorMessage = ref(null);
    if (!Array.isArray(rules) || rules.length <= 0) return true;
    if ((!value || value?.length <= 0) && !rules.includes("required"))
      return true;

    const failedRule = rules.find((rule) => {
      if (
        typeof rule === "function" ||
        (validators[rule] == null && typeof rule !== "object")
      ) {
        return false;
      }

      if (typeof rule === "object") {
        return !rule.isValid(value);
      }
      return validators[rule](value).isValid === false;
    });

    if (failedRule) {
      if (typeof failedRule === "object") {
        errorMessage.value = failedRule.errorMessage;
        return !failedRule;
      }
      const failedValidator = validators[failedRule](value);
      errorMessage.value = failedValidator.errorMessage;
    }

    return { isValid: !failedRule, errorMessage: errorMessage.value };
  }

  return { validate, allRules };
}
