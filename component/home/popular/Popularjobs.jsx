import {React, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hooks/useFetch'


const Popularjobs = () => {
  const router = useRouter()
  const {data, isLoading, error} = useFetch('search', {
    query:'Node.js developer in New-York,USA', 
    num_pages:1
  })

  const[selectedJob, setSelectedJob] = useState()
  const handleCardPress = (item) =>{
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Popular Jobs
        </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          {isLoading? (
            <ActivityIndicator size={'large'} color={COLORS.primary}/>
          ): error ? (
            <Text>Something went wrong</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({item}) => (
                <PopularJobCard
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                />
              )}
              keyExtractor={ item => item?.job_id}
              contentContainerStyle={{columnGap:SIZES.medium}}
              horizontal
            />
          )}
        </View>
      
    </View>
  )
}

export default Popularjobs