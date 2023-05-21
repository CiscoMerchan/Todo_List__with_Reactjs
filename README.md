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
   #### Generate ID for newTodoList
    Each todolist need to have a unique id to be able to generate change in the todolist array in Manager.jsx.
    To generate the uniques id we will use 'uuid' package. (https://www.npmjs.com/package/uuid)

    - in the terminal `npm install uuid`

    - in Form.jsx : `import { v4 as uuidv4 } from 'uuid';`  

    - Add 'uuidv4()' as value in 'id':
        `const newTodoList = 
            id: uuidv4(),
            ...`  

    - Check the 'newTodoList' in the console 

    - Pass as props the 'newTodoList' to Manager.jsx:
        `props.onSubmit(newTodoList);`  
### Main Challange
    The main challange for me is to understand how in a form the data is transfert from one component to another. Here is when 'props' have therir role. 
    Easy to understand that 'props' take data into a component from another component like
    `{props.name}`. But how to create an action in another function by passing an argument from a componet to another? in this way each component manage its own functionality.

    This is what I understood:

   **1. Form**  
    - I have a Form component, inside there is an <input> element that take the inputs from the user.

    - To store the data from the user a use 'useState' hook, which store the the current state (value in the input) and a function that update the state (value).

    - To make use of the useState will be done through an event listener 'onChange' that takes a function as an argument. A function that will update the state of the current value that comes from the input element.

    - Once the user is done typing the input and press on 'Add' <buttom> the Form has an event listener property 'onSubmit'. This event instruct the form what to do, that instruction is manage by the function that is pass as an argument inside the bracket of the 'onSubmit' event listener.

    - The function that manage the action after click on 'add' button it will take as argument the event listener start the instructions:
        a. use event listener to prevent the refresh of the page by using `.preventDefault();` method.
        b. In this case create an object that will take the input value store in the current state, plus more other information that wants to be transferred.
        c. Using 'props' to return as argument the new object create ( tihis props will be render inside the <Form /> component that it is in Manager.jsx file, the props in Manager.jsx will take as argument a function and that function in Manager function will take as argument the new object that Form component is returning from the form submition.).
   **2. Manager**
    - Inside `<Form />` component onSubmit props will be render and inside the brackets will take as argument 'addTodoList' function.
    
    - 'addTodoList' function will be call at that moment and because the onSubmit props comes with an argument (an object). 
    
    - The argument in 'addTodoList' will be use to add the object to the useState in Manager component (in this case the current state is an array) and manage by the state function.

   #### Render input in Manager component
    - The 'addTodoList' function take as argument the input fron the form.

    - Check that there is not empty the input text value.

    - if there is space at the start or at the end of the string, clean the string using '.trim()'.

    - create a new array the will update the object insite the current state. at the first in the array is added the new object and as second argument the current state with the spread operator.
        `const newTodoListUpdated = [newtodoList, ...todoList];`
        this way the new arrival object will be render at the top of the list. 

    - Update the current state using the state function and pass a argument the new array created.






             

     


    

