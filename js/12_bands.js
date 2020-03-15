;(function () {
  // convert a band JavaScript object to an HTML string
  function buildBandHTML (band) {
    // TODO: Your code goes here.
    return `
    <div class="d-flex flex-column rounded" style="width: 600px; margin: 20px; padding: 20px; background: lightgrey;">
      <div class="border-bottom border-secondary mb-3">
        <h1>${band.artist.toUpperCase()}</h1>
      </div>
      ${band.albums.map(buildAlbumsHTML).join('')}
    </div>
    `
  }

  function buildAlbumsHTML (album) {
    return `
    <div class="d-flex flex-column" style="margin-bottom: 20px;">
      <div class="media border-bottom border-secondary mt-2">
        <img src="${album.coverArt}" class="mr-3 mb-3" style="width: 50px; height: 50px;">
        <div class="media-body"><h3 class="mt-0">${album.title}</h3></div>
      </div>
      ${album.songs.map(buildSongListHTML).join('')}
    </div>
    `
  }

  function buildSongListHTML (song) {
    return `
    <div class="d-flex flex-row border-bottom border-secondary mt-3">
      <div><img src="images/icons/playbutton.png" style="width: 20px; height: 20px; margin: 0px 10px 0px 10px;"></div>  
      <div class="flex-grow-1"><h5>${song.title}</h5></div>
      <div class="ml-auto">${song.length}</div>
    </div>
    `
  }

  // Some great late 90s, early 2000s albums here ;)
  const bandsData = [
    {
      artist: 'Creed',
      albums: [
        {
          title: 'My Own Prison',
          coverArt: 'https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg',
          songs: [
            {
              title: 'Torn',
              length: '6:25'
            },
            {
              title: 'Ode',
              length: '4:58'
            },
            {
              title: 'My Own Prison',
              length: '5:00'
            },
            {
              title: 'Pity for a Dime',
              length: '4:37'
            },
            {
              title: 'In America',
              length: '3:38'
            },
            {
              title: 'Illusion',
              length: '5:29'
            }
          ]

        },
        {
          title: 'Weathered',
          coverArt: 'https://images-na.ssl-images-amazon.com/images/I/81sD1hpYi7L.jpg',
          songs: [
            {
              title: 'Bullets',
              length: '6:25'
            },
            {
              title: 'Freedom Fighter',
              length: '4:58'
            },
            {
              title: "Who's Got My Back?",
              length: '5:00'
            },
            {
              title: 'Signs',
              length: '4:37'
            },
            {
              title: 'One Last Breath',
              length: '3:38'
            },
            {
              title: 'My Sacrifice',
              length: '5:29'
            }
          ]
        }
      ]
    },
    {
      artist: 'Eve 6',
      albums: [
        {
          title: 'Eve 6',
          coverArt: 'https://images-na.ssl-images-amazon.com/images/I/517r8Wx6JyL.jpg',
          songs: [
            {
              title: 'How Much Longer',
              length: '3:06'
            },
            {
              title: 'Inside Out',
              length: '3:39'
            },
            {
              title: 'Leech',
              length: '3:59'
            },
            {
              title: 'Showerhead',
              length: '3:03'
            },
            {
              title: 'Open Road Song',
              length: '3:15'
            },
            {
              title: 'Jesus Nitelite',
              length: '4:48'
            },
            {
              title: 'Superhero Girl',
              length: '3:36'
            },
            {
              title: 'Tongue Tied',
              length: '3:11'
            },
            {
              title: 'Saturday Night',
              length: '2:50'
            },
            {
              title: "There's a Face",
              length: '2:38'
            },
            {
              title: 'Small Town Trap',
              length: '4:19'
            }
          ]

        },
        {
          title: 'Horrorscope',
          coverArt: 'https://images-na.ssl-images-amazon.com/images/I/71jv09nffWL.jpg',
          songs: [
            {
              title: 'Rescue',
              length: '3:56'
            },
            {
              title: 'Promise',
              length: '2:56'
            },
            {
              title: 'On the Roof Again',
              length: '3:05'
            },
            {
              title: 'Sunset Strip Bitch',
              length: '3:18'
            },
            {
              title: "Here's to the Night",
              length: '4:09'
            },
            {
              title: 'Amphetamines',
              length: '2:46'
            },
            {
              title: 'Enemy',
              length: '3:48'
            },
            {
              title: 'Nocturnal',
              length: '3:07'
            },
            {
              title: 'Jet Pack',
              length: '3:33'
            },
            {
              title: 'Nightmare',
              length: '3:07'
            },
            {
              title: 'Bang',
              length: '3:34'
            },
            {
              title: 'Girl Eyes',
              length: '3:45'
            }
          ]
        }
      ]
    }
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('bandsBtn')

  function bandsBtn () {
    
    contentElement.innerHTML = `
      <div class="d-flex flex-column align-items-center justify-content-center">
      ${bandsData.map(buildBandHTML).join('')}
      </div>
      `
  }

  btnEl.addEventListener('click', bandsBtn)

})()
