import React from "react";
import "./App.css";
import ContactList from "./components/contacts/ContactList";
import ContactForm from "./components/contacts/ContactForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfPage: "contacts",
        };
        this.changePage = this.changePage.bind(this);     
    }

    changePage(newNameOfPage) {
        this.setState({ nameOfPage: newNameOfPage });
    } 

    saveContact(contact) {
        console.log(contact);
        return fetch(`${ContactList.API}`, {
            method: "POST",
            body: JSON.stringify(contact),
        })
            .then((resp) => resp.json())
            .then((r) => console.log(r));
    }

    render() {
        let pageName = this.state.nameOfPage;
        if (pageName === "contacts") {
            return (
                <div className="App">
                    <ContactList
                        onButtonFormClick={this.changePage}
                        onUpdateClick={this.changePage}
                    />
                </div>
            );
        }
        if (pageName === "add contact") {
            return (
                <div className="App">
                    <ContactForm
                        onCancelClick={this.changePage}
                        onSaveClick={this.saveContact}
                    />
                </div>
            );
        }
    }
}

export default App;
