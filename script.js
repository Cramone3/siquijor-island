(function(){
  try{
    var field = document.getElementById('firefly-field');
    if(field){
      for(var i=0;i<22;i++){
        var f = document.createElement('div');
        f.className='firefly';
        f.style.left = (Math.random()*100)+'%';
        f.style.top = (20+Math.random()*70)+'%';
        f.style.animationDuration = (6+Math.random()*8)+'s, '+(2+Math.random()*3)+'s';
        f.style.animationDelay = (Math.random()*6)+'s, '+(Math.random()*4)+'s';
        field.appendChild(f);
      }
    }
  }catch(e){}

  document.querySelectorAll('[data-card]').forEach(function(card){
    card.addEventListener('click', function(){ card.classList.toggle('open'); });
  });

  document.querySelectorAll('.rt-day-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var d = btn.getAttribute('data-day');
      document.querySelectorAll('.rt-panel').forEach(function(p){
        p.classList.toggle('active', p.getAttribute('data-rt-panel') === d);
      });
      document.querySelectorAll('.rt-day-btn').forEach(function(b){
        b.setAttribute('aria-selected', b.getAttribute('data-day') === d ? 'true' : 'false');
      });
    });
  });

  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click', function(){
      btn.closest('.faq-item').classList.toggle('open');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var id = a.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if(el && id !== 'top'){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
})();
