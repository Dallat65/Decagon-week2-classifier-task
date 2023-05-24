// const input = [
//     {
//       name: 'Hendrick',
//       dob: '1853-07-18T00:00:00.000Z',
//       regNo: '041',
//     },
//     {
//       name: 'Albert',
//       dob: '1879-03-14T00:00:00.000Z',
//       regNo: '033',
//     },
//     { 
//       name: 'Marie',
//       dob: '1867-11-07T00:00:00.000Z',
//       regNo: '024',
//     },
//     {
//       name: 'Neils',
//       dob: '1885-10-07T00:00:00.000Z',
//       regNo: '02',
//     },
//     {
//       name: 'Max',
//       dob: '1858-04-23T00:00:00.000Z',
//       regNo: '014',
//     },
//     {
//       name: 'Erwin',
//       dob: '1887-08-12T00:00:00.000Z',
//       regNo: '09',
//     },
//     {
//       name: 'Auguste',
//       dob: '1884-01-28T00:00:00.000Z',
//       regNo: '08',
//     },
//     {
//       name: 'Karl',
//       dob: '1901-12-05T00:00:00.000Z',
//       regNo: '120',
//     },
//     {
//       name: 'Louis', 
//       dob: '1892-08-15T00:00:00.000Z',
//       regNo: '022',
//     },
//     {
//       name: 'Arthur',
//       dob: '1892-09-10T00:00:00.000Z',
//       regNo: '321',
//     },
//     {
//       name: 'Paul',
//       dob: '1902-08-08T00:00:00.000Z',
//       regNo: '055',
//     },
//     {
//       name: 'William',
//       dob: '1890-03-31T00:00:00.000Z',
//       regNo: '013',
//     },
//     {
//       name: 'Owen',
//       dob: '1879-04-26T00:00:00.000Z',
//       regNo: '052',
//     },
//     {
//       name: 'Martin',
//       dob: '1871-02-15T00:00:00.000Z',
//       regNo: '063',
//     },
//     {
//       name: 'Guye',
//       dob: '1866-10-15T00:00:00.000Z',
//       regNo: '084',
//     },
//     {
//       name: 'Charles',
//       dob: '1868-02-14T00:00:00.000Z',
//       regNo: '091',
//     },
//   ];

//   function maxAge(arr){
//     let ages = []
//     for (let i of arr){ages.push(i.age)}
//     return Math.max(...ages)
//   }

//   function sumAges(arr){
//     let regs = []
//     for(let i of arr){regs.push(+i.reNo)}
//     return regs.sort((a,b) => a-b)
//   }

//   function checkAge(a,b){
//     let age1 = a
//     let age2 = b
//   }

// function classifier(input) {
//     let inputCopy =input.slice();
//     let groupedData = []
//     let output = {
//         noOfGroups: 0
//     }

//     for (let i of inputCopy){
//         i.age = new Date().getFullYear() - new Date(i.dob).getFullYear() 
//     }

//     inputCopy.sort((a,b)=>  a.age - b.age)

//     for (i of inputCopy){
//         if(groupedData.length === 0){
//             groupedData.push([i])
//         }
//     }
//     for (let i=1; i<inputCopy.length; i++){
//         let lastArr = groupedData[groupedData.length-1]
//         let lastStudent = lastArr[lastArr-1]

//         if (checkAge(inputCopy[i].age, lastStudent.age) > 5 || lastArr.length ===3){
//         groupedData.push([inputCopy[i]])
//         }else{
//                 lastArr.push(inputCopy[i])
//             }
//         }
//         output.noOfGroups = groupedData.length

//         for(let i=0; i< groupedData.length; i++){
//             output[`group${i+1}`] = {
//                 members: groupedData[i],
//                 oldest: maxAge(groupedData[i]),
//                 sum: sumAges(groupedData[i]),
//                 regNos: sortRegNos(groupedData[i])
//             }
//         }
//         return output
//     }


// export default classifier;
