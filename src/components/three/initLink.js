import * as THREE from 'three';

export function initLink(linkGroup, logo, logos, addToArray){
  console.log(`${logo}:`, logos[logo])

  const logoUrl = logos[logo]

  let logoLoader = new THREE.TextureLoader()
    logoLoader.load(logoUrl, ( texture ) => {


      let planeGeo = new THREE.PlaneGeometry(1, 1)
      let planeMaterial = new THREE.MeshBasicMaterial({map: texture, overdraw: 0.5})
      let planeMesh = new THREE.Mesh(planeGeo, planeMaterial)
      planeMesh.material.side = THREE.DoubleSide
      planeMesh.material.transparent = true
      planeMesh.castShadow = true

      linkGroup.add(planeMesh)
      addToArray(planeMesh)

      switch (logo) {
        case "instagram":
          planeMesh.position.set(0, 5, -5)

          break
        case "linkedIn":
          planeMesh.position.set(-12, 0, 5)
          planeMesh.rotation.y = Math.PI / 3;
          break
        case "palette":
          planeMesh.position.set(8, 0, 8)
          break
        case "medium":
          planeMesh.position.set(0, 0, 10)
          break
        case "about":
          planeMesh.position.set(0, -3, 15)
          break
        case "projects":
          planeMesh.position.set(0.1, 0, 0)
          break
        case "github":
          planeMesh.position.set(-7, -3.5, 10)
          break

        default:
          break
      }




    })





}
