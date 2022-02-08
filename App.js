import React from 'react';
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Feather é a fonte do icone
import profilePicture from './src/assets/profilePicture.jpg';
import Card from './src/components/Card';

// Estilo não segue hierárquia!

export default function App() {

	// Chamando função com parms
	// Usado Arrow Function para não executar toda vez que objeto realizar refresh no App
	function handleSocialNetworks(socialNetworks){
		switch(socialNetworks){
			case 'linkedin':
				return Alert.alert('Linkedin','https://www.linkedin.com/in/heviane-bastos');
				break;
			case 'github':
				return Alert.alert('GitHub','https://github.com/heviane');
				break;
			case 'facebook':
				return Alert.alert('Facebook','https://www.facebook.com/heviane.bastos.3');
				break;
			case 'instagram':
				return Alert.alert('Instagram','https://www.instagram.com/byheviane');
				break;
		}
	}

	return (
		<>
			<View style={styles.page}>	
				<View style={styles.header}>
					<Image source={profilePicture} style={styles.photo} />
					<Text style={styles.name}>Heviane Bastos da Costa</Text>
					<Text style={styles.stack}>Fullstack developer</Text> 
					<View style={styles.socialNetworks}>
						<TouchableOpacity onPress={() => handleSocialNetworks('linkedin')}>
							<Icon name="linkedin" size={25}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handleSocialNetworks('github')}>
							<Icon name="github" size={25}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handleSocialNetworks('instagram')}>
							<Icon name="instagram" size={25}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handleSocialNetworks('facebook')}>
							<Icon name="facebook" size={25}/>
						</TouchableOpacity>
					</View>
				</View>	
				<Card title="Professional Experiences">
					<Text style={styles.card_content_title}>Linkjur Logística Jurídica</Text>
					<Text style={styles.card_content_title}>Qualitá Informática</Text>
					<Text style={styles.card_content_title}>GX2 Tecnologia</Text>
					<Text style={styles.card_content_title}>Getech Soluções em Informática</Text>
				</Card>
				<Card title="Academic Education">
					<Text style={styles.card_content_title}>Sistemas de Informação - Unisinos</Text>
					<Text style={styles.card_content_title}>Técnico em Informática - QI</Text>
				</Card>			
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1, // ocupa todo o espaço disponível na tela
		alignItems: 'center', // centraliza na horizontal 
		justifyContent: 'center', // centraliza na vertical
		backgroundColor: '#E7E7E7',
	},
	header: {
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},
	photo: {
		width: 250,
		height: 250,
		borderRadius: 125,
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#939393',
	},
	stack: {
		color: '#939393',
	},
	socialNetworks: {	
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '40%',
		marginTop: 10,
	},
	card_content_title: {
		color: '#939393',

	},
});