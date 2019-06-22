export const notesTestData = [
    {
        _id: '34ergtfdhgs54',
        settings: {
            type: 'note-text',
            isPinned: false,
            isMarked: false,
            editMode: false
        },
        bgColor: '#fff',
        data: {
            text: "This is very interesting note",
        },
    },
    {
        _id: '34ergtfdfhs54',
        settings: {
            type: 'note-img',
            isPinned: false,
            isMarked: false,
            editMode: false
        },
        bgColor: '#fff',
        data: {
            src: "This is very interesting note",
        },
    },
    {
        _id: '34erfgtfdhs54',
        settings: {
            type: 'note-todo',
            isPinned: false,
            isMarked: false,
            editMode: false
        },
        bgColor: '#fff',
        data: {
            todos: [
                { text: 'Wash my car', completed: false },
                { text: 'submit 3rd sprint app to yaron', completed: true },
                { text: 'drink a beer', completed: true },
                { text: 'Get vue sticker', completed: false },
            ]
        },
    },
]