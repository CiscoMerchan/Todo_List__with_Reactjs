# Todo List with react.js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## 1. Logo
    -Style page in App.css 
    - Logo is code in App.js and style in App.css

## 2. Container for the component
    -Creating of a container where the input and display list      component will be display
    - These elements are created in App.js and styled in App.css

    Create a new folder in 'src' named component. In this folder will be the components files.

    Create a new folder in 'src' named componentStyleSheet. In this folder will be the style files of the components. 

## 3. TodoList Componet
    - File name TodoList.jsx
    - Create function component TodoList
    - Export component to App.js
    - Create style for TodoList component in componentStyleSheet as TodoList.css
    - TodoList.css   
    - To render icon delete 'X' it will use react-incons package
        `npm install react-icons --save`
        *** More info: https://react-icons.github.io/react-icons

        At the top of TodoList.jsx import react-icon  package:
        `import { IconName } from "react-icons/ai";` 
        find icon in:
         `https://react-icons.github.io/react-icons/icons?name=ai`
        
        Once the we know the icon we want to use, click on the icon that will copyclip the name and paste inside the brackets of import replace 'IconName' for the choosen icon.
        Then to render the icon in the component (this element is a rect component in itself): `<IconName />` 

    - Add a class to the `className="todolist-container"` with a props 'isDone' as condition and on click will change the style to let know the user tha the tasks have been done.
    
    - Add new class to TodoList.css that when the user click on the background color will change and the text decorator. (Check on inspection add the new class name to verify if the result is good). 
    
## 4. Form Component
    - New file Form.jsx in component folder
    
    - Create form component inside Form.jsx. This form will take just one input text(the task to add in the list). And will have a button element.
    
    - Export Form.

    - Create a Form.css file in componentStyleSheet to add style to Form component.

    - import Form.css to Form.jsx

    -import Form component to App.js

## 5. Manager Component

    The state of the Form and TodoList component will be manege inside this component.

    - Create Manager.jsx file component folder. 

    - import Form component. Add inside the Manager function <From />

    - Bellow <Form /> add a <div> element that will take a list of TodoList components. And import <TodoList />.
    Export to App.js to check that everything is fine.

    - Create a Manager.css file inside componentStyleSheet folder. once the style is done import to Manager.jsx

## 6. Manage state of TodoList

    The state of the component will be manage inside Manager.jsx. To create and manage an array the will contain the the TodoList I will use 'useState' Hook.

    - import useState

    - Inside 'Manager' function and before 'return':
        `const [todoList, setTodoList] = useState([])`
        'todoList' will hold the array of todolist and 'setTodoList' is a function that will manage the state of the array. 

    - Render the TodoList component using map()
    
    - Add props to TodoList.jsx : id(to identify the object), todoListIsDone (a function), deleteTodoList (a function). to manage the diferent states of <TodoList /> component.
         
        todoListIsDone and deleteTodoList will be pass as a function onClick and will take as argument the id. in this way we can know which object in the 'todoList' array will be either make as complete or delete.

  ### Handle Text input from '<Form />'

    - Create a funtion that will add the text from the input to the 'todoList' array.

    - Add a function that will handle the event (user click on Add button) in Form.jsx.

    - Add function that will create an object that will contain id and text.

    - Manage the state inside Form.jsx, importing 'useState'

        ` const [input, setInput] = useState('');
  
            const handleChange = e => {
                setInput(e.target.value);
                console.log(input)
            }` 
        and inside the <input/> element (add event listener to input):
        `onChange={handleChange}`     

    - Check in the console in the text typed in the input case is return the characters. 

  ### Handle add button in '<Form />'

    - Add a event listener to <form> element:
        `<form 
        className='form-list'
        onSubmit={handleSendInput}
        >
        ...` 
    - Function that handle the event:
        ` const handleSendInput = e => {
            /*.preventDefault() avoid the refresh of the page*/ 
            e.preventDefault();

            /*newTodoList is and object that will represent the new text that will be render as text
            in <TodoList /> component */ 
            const newTodoList = {
            id: '11',
            // text from the input
            text: input,
            // Boolean that will define the style class in TodoList. default value 'false'
            isDone: false
            }
        } `     

             

     


    

