
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);


document.querySelectorAll('.section-header, .program-box').forEach(element => {
    observer.observe(element);
});

// tuition calculator

const tuitionRates = {
    'cs': {
        'undergraduate': {
            'in-state': 15000,
            'out-state': 25000,
            'international': 30000
        },
        'graduate': {
            'in-state': 20000,
            'out-state': 30000,
            'international': 35000
        },
        'doctorate': {
            'in-state': 25000,
            'out-state': 35000,
            'international': 40000
        }
    },
    'business': {
        'undergraduate': {
            'in-state': 14000,
            'out-state': 24000,
            'international': 29000
        },
        'graduate': {
            'in-state': 19000,
            'out-state': 29000,
            'international': 34000
        },
        'doctorate': {
            'in-state': 24000,
            'out-state': 34000,
            'international': 39000
        }
    },
    'engineering': {
        'undergraduate': {
            'in-state': 16000,
            'out-state': 26000,
            'international': 31000
        },
        'graduate': {
            'in-state': 21000,
            'out-state': 31000,
            'international': 36000
        },
        'doctorate': {
            'in-state': 26000,
            'out-state': 36000,
            'international': 41000
        }
    },
    'medicine': {
        'undergraduate': {
            'in-state': 18000,
            'out-state': 28000,
            'international': 33000
        },
        'graduate': {
            'in-state': 23000,
            'out-state': 33000,
            'international': 38000
        },
        'doctorate': {
            'in-state': 28000,
            'out-state': 38000,
            'international': 43000
        }
    },
    'arts': {
        'undergraduate': {
            'in-state': 13000,
            'out-state': 23000,
            'international': 28000
        },
        'graduate': {
            'in-state': 18000,
            'out-state': 28000,
            'international': 33000
        },
        'doctorate': {
            'in-state': 23000,
            'out-state': 33000,
            'international': 38000
        }
    }
};

const housingRates = {
    'none': 0,
    'shared': 5000,
    'single': 8000,
    'apartment': 12000
};

const mealPlanRates = {
    'none': 0,
    'basic': 2000,
    'standard': 3000,
    'premium': 4000
};

// getting tuitionform 
const tuitionForm = document.getElementById('tuitionForm');
const tuitionResult = document.getElementById('tuitionResult');


tuitionForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    const program = document.getElementById('program').value;
    const level = document.getElementById('level').value;
    const residency = document.getElementById('residency').value;
    const housing = document.getElementById('housing').value;
    const mealPlan = document.getElementById('mealPlan').value;

    
    if (program && level && residency) {
        const tuitionCost = tuitionRates[program][level][residency];
        const housingCost = housingRates[housing];
        const mealPlanCost = mealPlanRates[mealPlan];
        const totalCost = tuitionCost + housingCost + mealPlanCost;

        
        tuitionResult.innerHTML = `
            <div class="result-content" style="animation: fadeInUp 0.5s ease-out">
                <h3>Estimated Annual Costs</h3>
                <div class="cost-breakdown">
                    <div class="cost-item">
                        <span>Tuition</span>
                        <span>$${tuitionCost.toLocaleString()}</span>
                    </div>
                    <div class="cost-item">
                        <span>Housing</span>
                        <span>$${housingCost.toLocaleString()}</span>
                    </div>
                    <div class="cost-item">
                        <span>Meal Plan</span>
                        <span>$${mealPlanCost.toLocaleString()}</span>
                    </div>
                    <div class="cost-item total">
                        <span>Total Annual Cost</span>
                        <span>$${totalCost.toLocaleString()}</span>
                    </div>
                </div>
                <p class="note">* These are estimated costs and may vary.</p>
            </div>
        `;

        
        tuitionResult.style.display = 'block';
        tuitionResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});



const inquiryForm = document.getElementById('inquiryForm');


inquiryForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    // Get all input values
    const name = inquiryForm.querySelector('input[type="text"]').value;
    const email = inquiryForm.querySelector('input[type="email"]').value;
    const phone = inquiryForm.querySelector('input[type="tel"]').value;
    const program = inquiryForm.querySelector('select').value;
    const message = inquiryForm.querySelector('textarea').value;

    // Check if all fields are filled
    if (name && email && phone && program && message) {
        // Show success alert
        alert('Thank you for your message! We will contact you soon.');
        
        // Reset the form
        inquiryForm.reset();
    } else {
        // Show error alert if any field is empty
        alert('Please fill in all fields');
    }
});