import csvParser from "./csvParser";

const bband = async () => {
    const csvStream = await csvParser();
    console.log(csvStream);
};

export default bband;