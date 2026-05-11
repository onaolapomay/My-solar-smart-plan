import type { Appliance } from '../types/appliance.ts';

const appliances: Appliance[] = [
    {
        id: "1",
        name: 'fan',
        wattage: 50,
        isActive: true,
    },

    {
        id: "2",
        name: 'TV',
        wattage: 65,
        isActive: true,
    },

    {
        id: "3",
        name: 'Fridge',
        wattage: 120,
        isActive: false,
    },

    {
        id: "4",
        name: 'Laptop',
        wattage: 65,
        isActive: true,
    },
]


export default appliances;