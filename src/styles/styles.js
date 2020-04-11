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
