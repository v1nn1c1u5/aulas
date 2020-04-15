

function verdadeOuMentira(pausa){

    if (Math.random() > 0.5) {
        return 'Verdade';
    }
    else
    {
        return 'Mentira';
    }
}



console.log('O que você falou foi',verdadeOuMentira(5));