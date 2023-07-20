
import User from '../models/user.model.js'
import NumbersData from '../models/number.model.js'

export const register = async (req, res) => {
    const { numbers } = req.body;
  
    try {
      const newNumbersData = new NumbersData(numbers);
      const numbersDataSaved = await newNumbersData.save();
      console.log(newNumbersData)
      console.log(numbersDataSaved)
      res.json(numbersDataSaved);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al guardar los números' });
    }
  };

/*
export const register =async(req, res)=>{
    const{numbers}=req.body;

   try {
    const newNumber = new Number({
        numbers,
    });
    console.log(newNumber)
    const numberSaved = await newNumber.save();
    res.json(numberSaved);
   } catch (error) {
    console.log(error);
   }

   
}*/
export const login =(req, res)=>{
    console.log(req.body)
    res.send('registrando')
}