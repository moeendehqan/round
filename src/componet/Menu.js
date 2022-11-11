

import Alarm from '../page/Alarm'
import Filter from '../page/Filter'
import { useEffect } from 'react';
import { AiOutlineCaretLeft } from "react-icons/ai";

const Menu = (props) =>{
    const ListTabsArraye = [
        {id:1000,title:'هشدار',element:<Alarm/>,key:0},
        {id:2000,title:'فیلتر',element:<Filter/>,key:0},
    ]


    if (props.ActiveTab.length==0){
        props.setActiveTab([...props.ActiveTab,ListTabsArraye[0]])
    }
    const AddTab = (id) =>{
        for(var i in ListTabsArraye){
            var LoopObject = ListTabsArraye[i]
            if(LoopObject.id==id){
                LoopObject.key = props.ActiveTab.length
                props.setActiveTab([...props.ActiveTab,LoopObject])
            }
        }
    }

    return(
        <div className='Menu'>
            {ListTabsArraye.map(i=>{
                return(
                    <div className='Abtn' onClick={()=>AddTab(i.id)}>
                        <AiOutlineCaretLeft className='IcnCrt'/>
                        <button key={i.id} >{i.title}</button>
                    </div>
                )
                })   
            }

        </div>
    )

}


export default Menu