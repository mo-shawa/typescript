console.log('//////////////////////////////////// INTERFACES ////////////////////////////////////////');

//TYPE vs INTERFACE
//TYPE:
// describe shape of any variable, assigned like a variable with =
type Point2d = {
    x: number,
    y: number
}

type Point3d = Point2d & {
    y:number
    z:number
}

const point: Point3d = {y:1 , x:4, z: 54 }


//INTERFACE:
// reasons to use: declaration merging. pretty much only non syntactical difference

interface IPoint2d {
    x:number
    y: number
}


interface IPoint3d extends IPoint2d {
    z: number
}

const iPoint: IPoint3d = {
    x:3,
    y:3,
    z:6
} 


// INTERFACE DECLARATION MERGING:
// e.g. if you import 2 interfaces with identical declarations (names), typescript will automatically merge them

// Express example

interface Request {
    body: any
}

interface Request { // types with throw "duplicate identifier" error
    json: any
}

function handleReq(req:Request){
    req.body
    req.json
}

// neat feature cousin

// More comparison:

interface IinputProps {
    type: 'text' | 'email'
    value: string
    onChange: (newValue: string) => void
}

type InputOnChange = (newValue: string) => void // interface syntax doesn't allow this

type InputValue = string // or this

type InputType = 'text' | 'email' // or union types, though "extends" is the equivalent for intersection types

type InputProps = {
    type: InputType
    value: InputValue
    onChange: InputOnChange
}
