import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  container: {
    flex: 1,
  },
  iconContainer: {
    top: 10,
    right: 8,
  },
  scrollView: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 1,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  screen: {
    flex: 1,
    backgroundColor: '#1A1A1C',
    padding: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: '#fff',
  },
  reviewList: {
    width: '100%',
  },
  reviewName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
  },
  reviewHead: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewImage: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#1A1A1C',
  },
  infoImageContainer: {
    width: '100%',
  },
  infoBar: {
    backgroundColor: '#1A1A1C',
    borderWidth: 1,
    borderBottomColor: '#2D2D2D',
    borderTopColor: '#2D2D2D',
  },
  infoLabel: {
    fontFamily: 'Poppins-Medium',
  },
  infoIndic: {
    backgroundColor: 'white',
  },
  infoTitleContainer: {
    padding: 10,
  },
  infoTitle: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  infoCategory: {
    fontSize: 13,
    color: '#C4C4C4',
    fontFamily: 'Poppins-Regular',
  },
  infoRatedBy: {
    fontSize: 12,
    color: '#C0C0C0',
    fontFamily: 'Poppins-Regular',
  },
  infoRate: {
    fontSize: 12,
    color: '#C0C0C0',
    fontFamily: 'Poppins-Regular',
    marginRight: 5,
  },
  infoRatingContainer: {
    flexDirection: 'row',
  },
  infoRating: {
    marginRight: 5,
    width: 80,
  },
  infoImage: {
    width: '100%',
    height: 200,
  },
  infoPacity: {
    position: 'absolute',
    top: 10,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 50,
  },
  imageImg: {
    width: 200,
    height: 200,
  },
  imageContainer: {
    width: 160,
    height: 160,
    borderRadius: 15,
    marginRight: 5,
    overflow: 'hidden',
  },
  imageListContainer: {
    flex: 1,
    backgroundColor: '#1A1A1C',
    padding: 10,
  },
  imageList: {
    width: '100%',
  },
  imageViewContainer: {
    flex: 1,
    backgroundColor: '#1A1A1C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageViewImg: {
    width: '100%',
    height: 300,
  },
  imageViewPacity: {
    position: 'absolute',
    top: 10,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 50,
  },
  overviewContainer: {
    flex: 1,
    backgroundColor: '#1A1A1C',
    padding: 10,
  },
  overviewDescriptionContainer: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
  },
  overviewScroll: {
    borderWidth: 1,
    borderBottomColor: '#2D2D2D',
    paddingBottom: 5,
  },
  overviewDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#C0C0C0',
  },
  overviewAbout: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  overviewAboutContainer: {
    borderWidth: 1,
    borderBottomColor: '#2D2D2D',
    paddingBottom: 5,
  },
  overviewAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  overviewAddress: {
    color: '#C0C0C0',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginLeft: 10,
  },
  overviewOpeningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  overviewOpening: {
    color: '#C0C0C0',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginLeft: 10,
  },
  overviewWebsite: {
    color: '#C0C0C0',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginLeft: 10,
  },
  overviewWebsiteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  overviewContactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  overviewContact: {
    color: '#C0C0C0',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginLeft: 10,
  },
  reviewContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2D',
    paddingBottom: 10,
  },
  reviewImageContainer: {
    borderRadius: 50,
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
  reviewNameContainer: {
    marginLeft: 10,
  },
  reviewDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#767676',
  },
  reviewRating: {
    width: 100,
    marginTop: 10,
  },
  reviewComment: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    marginTop: 8,
  },
  reviewListContainer: {
    flex: 1,
    backgroundColor: '#1A1A1C',
    padding: 10,
  },
  headerTextSlim: {
    fontFamily: 'Poppins-Light',
    fontSize: 36,
    color: '#fff',
    marginTop: -20,
  },
  inputLabel: {
    color: '#E5E5E5',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginBottom: 6,
  },
  optionsContainer: {
    width: '100%',
    marginTop: 30,
  },
  radiusText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radiusTextColor: {
    color: '#fff',
  },
  searchRadius: {
    color: '#fff',
    textAlign: 'center',
  },
  discoverContainer: {
    backgroundColor: '#AA215C',
    borderRadius: 15,
  },
  discoverBtn: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#fff',
    padding: 12,
    textAlign: 'center',
  },
  selectContainer: {
    width: '100%',
    backgroundColor: '#2E2E30',
    borderRadius: 15,
    paddingHorizontal: 7,
    paddingVertical: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 12,
    height: 12,
    borderRadius: 4,
    backgroundColor: 'rgba(170, 33, 93, 0.9)',
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(170, 33, 93, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(170, 33, 93, 0.5)',
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    elevation: 2,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
    borderRadius: 10,
  },
  filterBtn: {
    position: 'absolute',
    top: 70,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
  },
});

export default styles;
