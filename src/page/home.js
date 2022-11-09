import Header from "../componet/Header"
import Menu from "../componet/Menu"

import Alarm from "./Alarm";
import Filter from "./Filter";

import 'react-dyn-tabs/style/react-dyn-tabs.css';
import 'react-dyn-tabs/themes/react-dyn-tabs-card.css';
import useDynTabs from 'react-dyn-tabs';


const Home = () =>{
    const options = {
        tabs: [
          {id: 'Alarm',
            title: 'هشدار',
            panelComponent: <Alarm />
            },
        ],
        selectedTabID: 'Alarm',
      };

    let _instance;
    const [TabList, PanelList, ready] = useDynTabs(options);
    ready((instance) => {_instance = instance;});

    
    const AddTab = function (id_name,title,element) {
        _instance.open({id: id_name, title: title, panelComponent:element})
        _instance.select(id_name)
    }

    return(
        <div className="Home">
            <Header/>
            <div className="Body">
                <div className="Menu">
                    <button onClick={()=>AddTab('Alarm','هشدار',<Alarm/>)}>هشدار</button>
                    <button onClick={()=>AddTab('Filter','فیلتر',<Filter/>)}>فیلتر</button>
                </div>
                <div>
                    <TabList></TabList>
                    <PanelList></PanelList>
                </div>
            </div>

        </div>
    )
}


export default Home