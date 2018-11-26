import React from 'react';
import './SeasonDisplay.css';

/*const getSeason=(lat,month)=>
{
if(month>2 && month<9)
{
return lat>0 ? 'summer' : 'Winter';
}
else
{
return lat<0 ? 'Winter' : 'summer';
}

}



const SeasonDisplay =(props)=>
{
  const Season=getSeason(props.lat,new Date().getMonth());
console.log(Season);
const text =  Season === 'Winter' ? 'Burr, it is Chilly' :'Lets hit the beach ';
const icon = Season ==='Winter' ?'snowflake' :'sun';

return (
  <div>
   <i className={`icon-right massive ${icon} icon`} />
   <i className={`massive ${icon} icon`} />
   <h1 className="SeasonDisplay">{text}</h1>


   </div>
 );


}
*/

const seasonConfig={
 summer:{text:'summer' ,iconName:'sun'},
 winter:{text:'winter' ,iconName:'snowflake'}
}

const getSeason = (lat,month)=>
{
if(month >2 && month<9)
{
return lat>0 ? 'summer' : 'winter';
}else
{
return lat>0 ? 'summer' : 'winter';
}
}

const SeasonDisplay =(props)=>
{

const season=getSeason(props.lat,new Date().getMonth());
const {text,iconName}= seasonConfig[season];

return (
  <div className={`${season}`}>{season}
  <i className={`massive ${iconName} icon`} />{iconName}
  </div>
 );


}
export default SeasonDisplay;
