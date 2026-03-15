const firstNames=[
    "Aarav", "Vivaan", "Aditya", "Arjun", "Karan", "Rahul", "Rohit", "Vikram",
    "Ishaan", "Kabir", "Dev", "Ayaan", "Neeraj", "Sahil", "Ankit", "Varun",
    "Riya", "Ananya", "Kavya", "Neha", "Pooja", "Sanya", "Aditi", "Priya",
    "Nisha", "Simran", "Ira", "Meera", "Zoya", "Tanya", "karthik"
];

const lastNames=[
    "Sharma", "Gupta", "Mehta", "Verma", "Singh", "Patel", "Malhotra", "Kapoor",
    "Agarwal", "Chatterjee", "Iyer", "Nair", "Joshi", "Khanna", "Bansal",
    "Reddy", "Das", "Kumar", "Jain", "Ali"
];


export const result={
    data: Array.from({length: 1000}, (_, index) => {
        const first=
            firstNames[Math.floor(Math.random()*firstNames.length)];
        const last=
            lastNames[Math.floor(Math.random()*lastNames.length)];

        return {
            id: `${first}_${last}_${index+1}`,
            name: `${first} ${last}`
        };
    })
};
