export const notesTestData = [
    {
        _id: '34ergtfdhgs54',
        setting: {
            type: 'text',
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
        setting: {
            type: 'image',
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
        setting: {
            type: 'todo',
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