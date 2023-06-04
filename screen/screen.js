
import ListarClientes from '../components/ListarClientes';
import agregarClientes from '../components/AgregarClientes';
import Hotel from '../components/Hotel'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const BottomTab = createBottomTabNavigator();
function Screen(){

    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name = "hotel" component={Hotel} />
            <BottomTab.Screen name = "Lista clientes" component={ListarClientes} />
            <BottomTab.Screen name = "Agregar Clientes" component={agregarClientes} />
        </BottomTab.Navigator>
    )
}

export default Screen