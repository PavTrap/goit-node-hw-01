const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
// const { program } = require("commander");

const contacts = require("./contacts");
// console.log(contacts);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "update":
      const updateContact = await contacts.updateContactById(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
    default:
      return console.warn("UNKNOWN ACTION");
  }
};

const arr = hideBin(process.argv);
// console.log(arr);
const { argv } = yargs(arr);
// console.log(argv);
invokeAction(argv);
//
//
//
//
//
//
//
//
//
//
//
//
////// const actionIndex = process.argv.indexOf("--action");
////// if (actionIndex !== -1) {
//////   const action = process.argv[actionIndex + 1];
//////   console.log(action);
//////   invokeAction({ action });
////// }
//
//
// program
//   .option("-a, --action, <type>")
//   .option("-i, --id, <type>")
//   .option("-n, --name, <type>")
//   .option("-e, --email, <type>")
//   .option("-p, --phone, <type>");
// program.parse();
// const options = program.opts();
// // console.log(options);
// invokeAction(options);
//
//
//
//
//
//
//
//
//
//
//
//
//1)
// invokeAction({ action: "read" });
//2)
// invokeAction({ action: "getById", id: "qdggE76Jtbfd9eWJHrssH" });
//3)
// invokeAction({
//   action: "add",
//   name: "Pavel Trapeznikov",
//   email: "paveltrapeznikovv@gmail.com",
//   phone: "+38(063)4303231",
// });
//4)
// invokeAction({
//   action: "updateById",
//   id: "m5TjPErnZGEWHUyKCcqbY",
//   name: "Pavel Trapeznikov",
//   email: "pablotrapezonti@gmail.com",
//   phone: "+38(063)4303231",
// });
//5)
// invokeAction({
//   action: "deleteById",
//   id: "m5TjPErnZGEWHUyKCcqbY",
// });
