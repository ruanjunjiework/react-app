import React, { Component } from 'react';

const NameCard = (props) =>{
    const {name,number,isHuman,tags} = props
        return (
            <div className="alert">
                <h4>{name}</h4>
                <ul>
                    <li>电话：{number}</li>
                    <li>{isHuman?'人类':'外星生物'}</li>
                </ul>
                <p>
                    {tags.map((tag,index)=>(
                      <span key={index}>{tag}</span>  
                    ))}
                </p>
            </div>
        )
}


// class NameCard extends Component{
//     render(){
//         const {name,number,isHuman,tags} = this.props
//         return (
//             <div className="alert">
//                 <h4>{name}</h4>
//                 <ul>
//                     <li>电话：{number}</li>
//                     <li>{isHuman?'人类':'外星生物'}</li>
//                 </ul>
//                 <p>
//                     {tags.map((tag,index)=>(
//                       <span key={index}>{tag}</span>  
//                     ))}
//                 </p>
//             </div>
//         )
//     }
// }

export default NameCard;