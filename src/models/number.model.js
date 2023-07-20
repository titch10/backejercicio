import mongoose from "mongoose";

const numberSchema = new mongoose.Schema(
  {
    year: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false, // No queremos que se cree un _id para cada objeto de número anidado
  }
);

const numbersDataSchema = new mongoose.Schema(
  {
    propio: [numberSchema],
    mama: [numberSchema],
    papa: [numberSchema],
    hermanos: [numberSchema],
    otros: [numberSchema],
  },
  {
    timestamps: true,
  }
);

const NumbersData = mongoose.model("NumbersData", numbersDataSchema);

export default NumbersData;