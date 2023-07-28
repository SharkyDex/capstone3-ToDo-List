import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var notes = [];
var notesL = notes.length;
var notes1 = [];
var notesL1 = notes1.length;


app.get("/", (req, res) => {
        res.render("index.ejs",{
            noteL: notes.length,
            note: notes,
        });
    });

    app.get("/worklist", (req, res) => {
        res.render("index2.ejs", {
            noteL1: notes1.length,
            note1: notes1,
        });
    });    

app.post("/", (req, res) => {
    notes.push(req.body["textinput"]);
    res.render("index.ejs", {
        noteL: notes.length,
        note: notes,
    });
    console.log(notes.length);
    console.log(notes);
});    

app.post("/worklist", (req, res) => {
    notes1.push(req.body["textinput1"]);
    res.render("index2.ejs", {
        noteL1: notes1.length,
        note1: notes1,
    });
    console.log(notes1.length);
    console.log(notes1);
});    


app.listen(port, () => {
    console.log(`The server is running on ${port}.`);
});

function toggleFunc() {
    var element = document.querySelector(".listEl");
    element.classList.toggle("strike");
}