export default defineNitroPlugin((nitroApp) => {
  let files: Record<any, any> = {};

  nitroApp.hooks.hook("content:file:beforeParse", (file) => {
    if (file._id.endsWith(".md")) {
      files[file._id] = file.body;
    }
  });

  nitroApp.hooks.hook("content:file:afterParse", (file) => {
    if (file._id.endsWith(".md")) {
      file.plainText = files[file._id];
    }
  });

  console.log(files);
});
