console.log('helo');

document.addEventListener('DOMContentLoaded', (e) => {
  if (e) {
    console.log('DOM loaded');
  }

  const changeDevorBtn = document.querySelectorAll('#change-devor');
  if (changeDevorBtn) {
    changeDevorBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        console.log('helos2');
        const id = e.target.getAttribute('data-id');

        const updateDevor = {
          devoured: 1,
        };

        fetch(`/api/burger/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateDevor),
          }).then((res) => {
          if(res.ok) {
            console.log(`change to devoured: ${updateDevor}`);
            location.reload('/');
          } else {
            console.error('somthing went swrong');
          }
        });     
      });
    });
  };

  const createBurgerBtn = document.getElementById('create-form');

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      const newBurger = {
        name: document.getElementById('burgerNew').value.trim(),
        devoured: 0,
      };

      fetch('api/burger', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(newBurger),
      }).then(() => {
        document.getElementById('burgerNew').value = '';
        console.log('Created a new burger!');
        location.reload();
      })
    })
  }

});