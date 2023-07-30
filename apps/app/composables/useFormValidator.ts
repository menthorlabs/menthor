import validators, { Validators } from "../../../packages/utils/validators";

type Rules = keyof Validators;

export function useFormValidator() {
  function allRules(required: boolean, rules: string[]) {
    if (!rules && required) {
      return ["required"];
    }

    if (required && !rules.includes("required")) {
      return ["required", ...rules];
    }

    return rules;
  }

  function validate(
    value: string,
    rules: Array<string | { isValid: Function; errorMessage: string }>
  ) {
    const errorMessage = ref("");
    if (!Array.isArray(rules) || rules.length <= 0) return true;
    if ((!value || value?.length <= 0) && !rules.includes("required"))
      return true;

    const failedRule = rules.find(
      (rule: string | { isValid: Function; errorMessage: string }) => {
        if (
          typeof rule === "function" ||
          (validators[rule as Rules] == null && typeof rule !== "object")
        ) {
          return false;
        }

        if (typeof rule === "object") {
          return !rule.isValid(value);
        }
        return validators[rule as Rules](value).isValid === false;
      }
    );

    if (failedRule) {
      if (typeof failedRule === "object") {
        errorMessage.value = failedRule.errorMessage;
        return !failedRule;
      }
      const failedValidator = validators[failedRule as Rules](value);
      errorMessage.value = failedValidator.errorMessage;
    }

    return { isValid: !failedRule, errorMessage: errorMessage.value };
  }

  return { validate, allRules };
}
