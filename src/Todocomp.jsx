/* eslint-disable react/prop-types */

const Todocomp = ({ itemvalue, delfun }) => {
  const inputstyle = {
    width: '45vw',
    fontSize: '3vh',
    border: 'none',
    outline: 'none',
    borderRadius: '1vh 0 0 1vh',
    margin: '0vh 0 1vh 0',
    padding: '1vh'

  }
  const butnstyle = {
    fontSize: '3vh',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    width: '50px',
    borderRadius: '0 1vh 1vh 0',
    outline: 'none',
    padding: '1vh'
  }
  return (
    <div>
      <input style={inputstyle} type="text" value={itemvalue} />
      <button style={butnstyle} onClick={delfun}>Del</button>
    </div>
  );
}

export default Todocomp;
