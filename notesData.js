export const notesTestData = [
    {
        _id: '111134ergtfdhgs54',
        settings: {
            type: 'note-text',
            isPinned: false,
            isMarked: false,
            editMode: false
        },
        bgColor: 'red',
        data: {
            text: "This is very interesting note",
        },
    },
    {
        _id: '6666634ergtfdfhs54',
        settings: {
            type: 'note-video',
            isPinned: false,
            isMarked: false,
            editMode: false
        },
        bgColor: '#fff',
        data: {
            src: 'https://clips.vorwaerts-gmbh.de/VfE_html5.mp4',
        },
    },
    {
        _id: '222234ergtfdfhs54',
        settings: {
            type: 'note-img',
            isPinned: false,
            isMarked: false,
            editMode: false
        },
        bgColor: '#fff',
        data: {
            src: "https://api.adorable.io/avatars/285/puki.png",
        },
    },
    {
        _id: '7777734ergtfdfhs54',
        settings: {
            type: 'note-audio',
            isPinned: false,
            isMarked: false,
            editMode: false
        },
        bgColor: '#fff',
        data: {
            src: 'https://cld2099web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3',
        },
    },
    {
        _id: '333334erfgtfdhs54',
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