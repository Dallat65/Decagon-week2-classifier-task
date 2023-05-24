function max(arr){
  let ageCount = 0
  for (let i of arr){
    if(i.age > ageCount){
      ageCount = i.age
    }
  }
  return ageCount
}

function sum(arr){
  let ageSum = 0
  for(let i of arr){
    ageSum += i.age
  }

}

function reg(arr){
  let regNos = []
  for(let i of arr){
    regNos.push(+i.reNo)
  }
  return regNos.sort((a,b) => a-b)

}

function classifier(input) {
  let inputCopy =input.slice();
  let groupedData = []
  let output = {
      noOfGroups: 0
  }

  for (let i of inputCopy){
      i.age = new Date().getFullYear() - new Date(i.dob).getFullYear() 
  }

  inputCopy.sort((a,b)=>  a.age - b.age)

  for (i of inputCopy){
      if(groupedData.length === 0){
          groupedData.push([i])
      }
  }
  for (let i=1; i<inputCopy.length; i++){
      let lastArr = groupedData[groupedData.length-1]
      let lastStudent = lastArr[lastArr-1]

      if (checkAge(inputCopy[i].age, lastStudent.age) > 5 || lastArr.length ===3){
      groupedData.push([inputCopy[i]])
      }else{
              lastArr.push(inputCopy[i])
          }
      }
      output.noOfGroups = groupedData.length

      for(let i=0; i< groupedData.length; i++){
          output[`group${i+1}`] = {
              members: groupedData[i],
              oldest: max(groupedData[i]),
              sum: sum(groupedData[i]),
              regNos: reg(groupedData[i])
          }
      }
      return output
  }



export default classifier;

