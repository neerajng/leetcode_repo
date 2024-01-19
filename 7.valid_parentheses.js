//Valid Parentheses
//Given a string s containing just the characters 
//'(', ')', '{', '}', '[' and ']', determine if the input string is valid.


const isValid = function(s){
    let stack=[];

    for(let i=0;i<s.length;i++){
        let c=s[i]

        switch(c){
            case '(' : stack.push(')')
            break;
            case '{' : stack.push('}')
            break;
            case '[' : stack.push(']');
            break;
            default:
                if(c !==stack.pop()){
                    return false
                }
        }
    }

    return stack.length===0
}

const string = "()"
console.log(isValid(string))
