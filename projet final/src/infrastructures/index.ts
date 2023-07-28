export type PeopleDetailApiResult  = {
    name: string;
    height: string;
}

export type PeopleApiResult = {
    results: PeopleDetailApiResult[];
}

class ArrayList<Type extends { id: string }> {
    private array: Type[] = [];

    add(item: Type): void {
        this.array.push(item);
    }

    get(index: number): Type {
        return this.array[index];
    }
}
const tableau = new ArrayList<{ id: string, name: string}>();
tableau.add({ id: '1', name: 'Luke' });

export async function getPeople(): Promise<PeopleApiResult> {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    
    return data as PeopleApiResult;
}

export interface PeopleDto {
    name: string;
    surname: string;
    height: string;
} 

export async function getPeopleAsArray(): Promise<PeopleDto[]> {
    const people = await getPeople();
 
    return people.results.map(p => {
        const [surname, name] = p.name.split(' ');
        return {
            name,
            surname,
            height: p.height,
        };
    });
}