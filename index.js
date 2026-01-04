// guy-yablonka-212173884-ethan-larrar-341073781
const app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
