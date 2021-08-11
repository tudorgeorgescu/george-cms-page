export const BASE_URL = "http://46.101.236.251:1337";

//Fetch Store main data
export async function fetchStoreMainData() {
  const response = await fetch(`${BASE_URL}/store-main`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const mainData = await response.json();
  return mainData;
}

//Fetch card collection details
export async function fetchCardGroupData(cardGroupId) {
  const response = await fetch(`${BASE_URL}/groupings/${cardGroupId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const cardCollectionData = await response.json();
  return cardCollectionData;
}
