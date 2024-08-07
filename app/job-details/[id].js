import React from 'react'
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn } from '../../component'
import { COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hooks/useFetch'

const JobDetails = () => {
    const params = useLocalSearchParams()
    const router = useRouter()

    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        >
                        </ScreenHeaderBtn>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"
                        >
                        </ScreenHeaderBtn>
                    ),
                    headerTitle: ''
                }}
            />
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {isLoading ? (
                        <ActivityIndicator size={'large'} color={COLORS.primary}/>
                    ):error? (
                        <Text>Something went wrong</Text>
                    ) : data.length === 0 ? (
                        <Text>No Data</Text>
                    ) : (
                        <View style={{padding:SIZES.medium, paddingBottom: 100}}>
                            <Company
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                location={data[0].job_country}
                            />
                            <JobAbout/>

                        </View>
                    )}
                </ScrollView>
            </>

        </SafeAreaView>
    )
}

export default JobDetails
