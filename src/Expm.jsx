import { TextField, Autocomplete, IconButton } from '@mui/material'
import { React, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


const arr = ['Expense', 'Savings', 'Investment'];
const history = [];
let x = 0;
function Expm() {
    const [data, setData] = useState({});
    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value }
        setData({ ...data, ...newInput });
    }
    const handleSubmit = () => {
        data.id = history.length;
        data.Transaction = document.getElementById('combo-box-demo').value
        setData(history.push(data));
        console.log(history);
        document.getElementById('combo-box-demo').value = null;
        document.getElementById('filled-password-input').value = null;
    }
    const deleteItem = (id) => {
        history.slice(id, 1);

        console.log(id);
    }
    return (
        <div className=' bg-[#FFFBEB] w-full h-[100vh] font-mono'>
            <div className='flex flex-col mx-[25vw] max border-2 border-gray-500 shadow-2xl text-gray-800 bg-[#CCD6A6] h-full'>
                <p className='mx-auto mt-2 text-3xl font-bold '>Expense Tracker</p>
                <div className='flex flex-row'>
                    <div id='History' className='w-[25vw]  text-center mt-[2vh] '>
                        <p className='mx-auto mb-7 text-xl font-semibold'>History</p>
                        <div className='max-h-[25vh] overflow-y-auto overflow-x-hidden '>
                            {history.map(history => (
                                <div className='w-[20vw] mt-2 h-[6vh] bg-white m-auto rounded-md drop-shadow-lg border-r-4 border-r-red-600 flex flex-row'>
                                    <IconButton aria-label="delete" className='float-left' >
                                        <DeleteIcon onClick={deleteItem(history.id)} />
                                    </IconButton>
                                    <p className='my-auto ml-2 text-xl'>{history.Transaction}</p>
                                    <p className='my-auto text-right lg:w-[10vw] mr-[1vw]'>${history.Amount}</p>
                                </div>))}
                        </div>

                    </div>
                    <div id='Expense' className='w-[25vw]  text-center mt-[2vh] '>
                        <p className='mx-auto mb-7 text-xl font-semibold'>Expenses</p>
                        <div>
                            <TextField
                                id="filled-password-input"
                                label="Amount"
                                name='Amount'
                                type="Number"
                                autoComplete="current-password"
                                variant="filled"
                                className=' w-[17vw] '
                                onChange={(event) => handleInput(event)}
                            />
                            <Autocomplete

                                id="combo-box-demo"

                                options={arr}
                                className='mt-[2vh] m-auto'
                                sx={{ width: '17vw' }}
                                renderInput={(params) => <TextField {...params} variant="filled" label="Transaction type" name='Transaction' />}
                            />
                            <button className='mt-[3vh] w-[17vw] border-2 bg-blue-600 text-white h-[6vh] hover:bg-blue-900' onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Expm;