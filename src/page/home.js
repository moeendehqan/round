import Header from "../componet/Header"
import Menu from "../componet/Menu"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useState } from "react";
const Home = () =>{

    const [ActiveTab, setActiveTab] = useState([])
    const CloseTab = (key) =>{setActiveTab(ActiveTab.filter((obj) => obj.key != key))}

    return(
        <div className="Home">
            <Header/>
            <div className="Middle">
                <Menu ActiveTab={ActiveTab} setActiveTab={setActiveTab}/>
                <div className="Desk">
                {ActiveTab==[]?null:
                <Tabs>
                    <TabList>
                        {ActiveTab.map(i=>{
                            return(
                                <Tab key={i.key}>
                                    <div>
                                        <p>{i.title}</p>
                                        <button onClick={()=>CloseTab(i.key)}>X</button>
                                    </div>
                                </Tab>
                            )
                        })}
                    </TabList>
                    {ActiveTab.map(i=>{
                            return(
                                <TabPanel key={i.key}>{i.element}</TabPanel>
                            )
                        })}
                </Tabs>
                }
                </div>
            </div>

        </div>
    )
}


export default Home