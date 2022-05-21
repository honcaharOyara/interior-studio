import refs from "./refs";

export function formHandler(e) {
  e.preventDefault();
  const target = e.target;
  const inputs = target.querySelectorAll(".js-input");
  const radios = target.querySelectorAll(".js-check");
  const files = target.querySelector(".js-input-file");

  getFormData(inputs, radios, files);
  target.reset();
  refs.formWarrior.innerHTML = "File size not more than 10 MB";
}

export function filevalidation(e) {
  const inputFile = e.target;

  if (inputFile.files.length > 0) {
    for (let i = 0; i <= inputFile.files.length - 1; i++) {
      const fileName = inputFile.files.item(i).name;
      const fileSizeByte = inputFile.files.item(i).size;
      const fileKbyte = Math.round(fileSizeByte / 1024);

      if (fileKbyte >= 10240) {
        refs.formWarrior.innerHTML = `<b>${fileName}</b> has ${Math.round(
          fileKbyte / 1024
        )}mb, please try another.`;
        refs.formWarrior.classList.add("invalid");
      } else {
        if (refs.formWarrior.classList.contains("invalid")) {
          refs.formWarrior.classList.remove("invalid");
        }
        refs.formWarrior.innerHTML = fileName;
      }
    }
  }
}

function getFormData(inputs, radios, files) {
  const formData = {};

  inputs.forEach((input) =>
    input.value === ""
      ? (formData[input.dataset.key] = "")
      : (formData[input.dataset.key] = input.value)
  );

  radios.forEach((input) => {
    if (input.checked) {
      formData[input.dataset.key] = input.value;
    } else {
      formData[input.dataset.key] = "";
    }
  });

  if (files.files.length > 0) {
    formData.files = [...files.files];
  } else {
    formData.files = "";
  }

  console.log(formData);

  return formData;
}
