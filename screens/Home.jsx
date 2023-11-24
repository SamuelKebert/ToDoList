import {React} from 'react';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {SafeAreaView, Button} from 'react-native';

function Home ({ navigation }) {

     

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (newTasks) => {
    setTasks([...tasks, newTasks]);
  };

    return (
        <>
            <SafeAreaView>
                <ToDoList tasks = {tasks}/>
                <ToDoForm addTask={addTask}/>


                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
      
            </SafeAreaView>
        </>
    )
}

export default Home;