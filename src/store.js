import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
    books: [
        {
            id: Math.floor(Math.random() * 100),
            name: "Red Rising"
        },
        {
            id: Math.floor(Math.random() * 100),
            name: "Golden Son"
        },
        {
            id: Math.floor(Math.random() * 100),
            name: "Morning Star"
        },
        {
            id: Math.floor(Math.random() * 100),
            name: "Iron Gold"
        },
        {
            id: Math.floor(Math.random() * 100),
            name: "Dark Age"
        }
    ],
    newBook: (bookName) =>
        set(
            produce((draft) => {
                draft.books.push({
                    id: Math.floor(Math.random() * 100),
                    name: bookName
                });
            })
        ),
    updateBook: (bookName) =>
        set(
            produce((draft) => {
                const book = draft.books.find((el) => el.id === bookName.id);
                book.name = bookName.name;
            })
        ),
    deleteBook: (bookName) =>
        set(
            produce((draft) => {
                const bookIndex = draft.books.findIndex((el) => el.id === bookName);
                draft.books.splice(bookIndex, 1);
            })
        )
}));
