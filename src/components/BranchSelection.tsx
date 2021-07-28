// import React, { useState } from "react";
// import {
//     Text,
//     View,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet,

// } from "react-native";
// import SelectBox from 'react-native-multi-selectbox-typescript'

// interface BranchSelectionProps {

// }
// type Item = null | { item: string, id: string }
// const K_OPTIONS = [
//     {
//       item: 'Juventus',
//       id: 'JUVE',
//     },
//     {
//       item: 'Real Madrid',
//       id: 'RM',
//     },
//     {
//       item: 'Barcelona',
//       id: 'BR',
//     }]

// export const BranchSelection: React.FC<BranchSelectionProps> = ({ }) => {
//     const [selectedTeam, setSelectedTeam] = useState<Item>(null)
   
//     function onChange() {
//         return (val:any) => setSelectedTeam(val)
//       }
//     return (
//       <View style={{ margin: 30 }}>
//         <View style={{ width: '100%', alignItems: 'center' }}>
//           <Text style={{ fontSize: 30, paddingBottom: 20 }}>Demos</Text>
//         </View>
//         <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Demo</Text>
//         <SelectBox
//           label="Select single"
//           options={K_OPTIONS}
//           value={selectedTeam}
//           onChange={onChange()}
//           hideInputFilter={false}
//         />
//         <View style={{ height: 40 }} />
//         <Text style={{ fontSize: 20, paddingBottom: 10 }}>MultiSelect Demo</Text>
       
//       </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         width: '100%',
//         height: '100%',
//         alignItems: "center",
//         justifyContent: "center"
//     }
// })