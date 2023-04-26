import { surpriseMePrompts } from "../constant";

export default function getRandomPrompts(prompts){
    const randomIndex = Math.floor(Math.random()*
    surpriseMePrompts.length);
    const randomPrompts = surpriseMePrompts[randomIndex];

    if (randomPrompts === prompts) return getRandomPrompts(prompts);

    return randomPrompts;
}