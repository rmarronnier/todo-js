function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fakeEndPointName() {
  sleep(Math.random() * (2000 - 100) + 100);
  if (Math.random > 0.5) {
    return "Ronald Smith"
  }
  else {
    throw new Error('Erreur nom');
  }
}

async function fakeEndPointAge() {
  sleep(Math.random() * (2000 - 100) + 100);
  if (Math.random > 0.5) {
    return 45
  }
  else {
    throw new Error('Erreur âge');
  }
}

async function fakeEndPointCity() {
  sleep(Math.random() * (2000 - 100) + 100);
  if (Math.random > 0.5) {
    return "Melun"
  }
  else {
    throw new Error('Erreur ville');
  }
}

fakeEndPointCity()