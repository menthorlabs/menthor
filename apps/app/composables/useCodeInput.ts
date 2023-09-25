export function useCodeInput(code: string[]) {
  let dataFromPaste: string[] | undefined;

  const keysAllowed: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  function isNumber(event: Event) {
    (event.currentTarget as HTMLInputElement).value = "";
    const keyPressed: string = (event as KeyboardEvent).key;
    if (!keysAllowed.includes(keyPressed)) {
      event.preventDefault();
    }
  }
  function handleInput(event: Event) {
    const inputType = (event as InputEvent).inputType;
    let currentActiveElement = event.target as HTMLInputElement;

    if (inputType === "insertText")
      (currentActiveElement.nextElementSibling as HTMLElement)?.focus();

    if (inputType === "insertFromPaste" && dataFromPaste) {
      for (const num of dataFromPaste) {
        const id: number = parseInt(currentActiveElement.id.split("_")[1]);
        currentActiveElement.value = num;
        code[id] = num;
        if (currentActiveElement.nextElementSibling) {
          currentActiveElement =
            currentActiveElement.nextElementSibling as HTMLInputElement;
          (currentActiveElement.nextElementSibling as HTMLElement)?.focus();
        }
      }
    }
  }
  function handleDelete(event: Event) {
    // keydown event = move to previous element then only delete number

    const value = (event.target as HTMLInputElement).value;
    const currentActiveElement = event.target as HTMLInputElement;
    if (!value)
      (currentActiveElement.previousElementSibling as HTMLElement)?.focus();
  }

  function onPaste(event: Event) {
    dataFromPaste = (event as ClipboardEvent).clipboardData
      ?.getData("text")
      .trim()
      .split("");

    if (dataFromPaste) {
      for (const num of dataFromPaste) {
        if (!keysAllowed.includes(num)) event.preventDefault();
      }
    }
  }

  return { isNumber, handleInput, handleDelete, onPaste };
}
