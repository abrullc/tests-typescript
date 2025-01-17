const skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
    name: String;
    hp: number;
    skills: string[];
    hometown?: string;
}

let strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ["Bash", "Counter"],
}

strider.hometown = "Rivendell";

console.table(strider);

export {};