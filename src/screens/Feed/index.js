import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

function Feed(){

    const posts = [
        {
            id: '1',
            author: 'diegooliveira.94',
            picture_url: 'https://hypescience.com/wp-content/uploads/2016/05/espaco-tres-dimensoes-3d.jpg',
            likes: 2003,
            description: 'Thats a starman, waiting in the sky...',
            hashtags: '#space #starman #bowie',
            place: 'Perdido no espaço'
        },
        {
            id: '2',
            author: 'marlenesanttana',
            picture_url: 'https://imagens.publicocdn.com/imagens.aspx/723667?tp=KM',
            likes: 978,
            description: 'Um dos melhores filmes do ano',
            hashtags: '#joker #coringa #oscar #joaquinphoenix',
            place: 'Cinema em casa'
        },
        {
            id: '3',
            author: 'marlenesanttana',
            picture_url: 'https://imagens.publicocdn.com/imagens.aspx/723667?tp=KM',
            likes: 978,
            description: 'Um dos melhores filmes do ano',
            hashtags: '#joker #coringa #oscar #joaquinphoenix',
            place: 'Cinema em casa'
        },
    ];

    function renderItem({item: post}){
        return (
            <View style={styles.post}>

                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>{post.author}</Text>
                        <Text style={styles.place}>{post.place}</Text>
                    </View>

                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                            <Image source={options} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Image style={styles.picture_url} source={{uri: post.picture_url}} />
                </View>

                <View style={styles.footer}>
                    <View style={styles.actions}>
                        <View style={styles.leftActions}>
                            <TouchableOpacity style={styles.action}>
                                <Image source={like} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image source={comment} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={send} />
                            </TouchableOpacity>
                        </View>
                        
                        <View>
                            <TouchableOpacity>
                                <Image source={save} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.likes}>{post.likes} likes</Text>
                        <Text style={styles.description}>{post.description}</Text>
                        <Text style={styles.hashtags}>{post.hashtags}</Text>
                    </View>

                </View>

            </View>
        );
    }

    return (
        <View>
            <FlatList 
                data={posts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    post:{
        marginVertical:15
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    postOptions: {},
    userInfo: {},
    author: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    place: {
        fontSize: 12,
        color: '#666',
        marginTop: 3
    },
    picture_url: {
        width:'100%',
        height:400,
        marginTop:15
    },
    footer: {
       paddingHorizontal: 15 
    },
    actions:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 15
    },
    action:{
        marginRight: 8
    },
    leftActions: {
        flexDirection: 'row'
    },
    likes: {
        fontWeight: 'bold',
        fontSize: 14
    },
    description: {
        color: '#000',
        lineHeight: 22
    },
    hashtags: {
        color: '#002D5E'
    }
})

export default Feed;