const QuizService = [
    {
        question: 'Why JavaScript is called as Lightweight Programming Language ?',
        option: [
            'because JS is client side scripting',
            'because JS is available free of cost.' ,
            'because we can add programming functionality inside JS',
            'because JS can provide programming functionality inside but up to certain extend.'
        ],
        correct: 3,
        questionId: toString(Math.random() * 101)
    },
    {
        question: 'JavaScript is also called as',
        option: [
            'Server Side Scripting Language', 
            'Client Side Scripting Language', 
            ' All of the above', 
            'None of the above'
        ],
        correct: 1,
        questionId: toString(Math.random() * 101)
    },
    {   
        question: 'Local Browser used for validations on the Web Pages uses',
        option: [
            'JS', 
            'Java', 
            'HTML', 
            'CSS'
        ],
        correct: 0,
        questionId: toString(Math.random() * 101)
    },
    {   
        question: 'JavaScript code can be called by using',
        option: [
            'RMI', 
            'Preprocessor', 
            'Function / Method', 
            'None of the above'
        ],
        correct: 2,
        questionId: toString(Math.random() * 101)
    },
    {   
        question: 'Which of the following Attribute is used to include External JS code inside your HTML Document ?',
        option: [
            'link', 
            'script', 
            'exit', 
            'src'
        ],
        correct: 1,
        questionId: toString(Math.random() * 101)
    },
    {   
        question: 'The _____ attribute is used to specify the character encoding used in an external script file.',
        option: [
            'charset', 
            'character', 
            'type', 
            'None of the above'
        ],
        correct: 0,
        questionId: toString(Math.random() * 101)
    },
    {       
        question: 'The async attribute can be set in the following ways',
        option: [
            '<script async>', 
            '<script async="">', 
            '<script async="async">', 
            'All of the above'
        ],
        correct: 3,
        questionId: toString(Math.random() * 101)
    },
    {   
        question: 'We use _____ style comment to prevent showing JavaScript as Content in the old browsers.',
        option: [
            'C', 
            'CSS', 
            'JS', 
            'HTML'
        ],
        correct: 3,
        questionId: toString(Math.random() * 101)
    },
    {
        question: 'Which was the first browser to support JavaScript ?',
        option: [
            'Google Chrome', 
            'Netscape', 
            'Mozilla Firefox', 
            'IE'
        ],
        correct: 1,
        questionId: toString(Math.random() * 101)
    },
    {
        question: 'Which attribute is used to specifies that the script is executed when the page has finished parsing (only for external scripts) ?',
        option: [
            'defer', 
            'type', 
            'async', 
            'parse'
        ],
        correct: 1,
        questionId: toString(Math.random() * 101)
    },
]

export default QuizService