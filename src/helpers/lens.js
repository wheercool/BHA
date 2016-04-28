function properties(obj) {
	var key, lst = [];
	for (key in obj) {
	 	if (obj.hasOwnProperty(key)) {
		   lst.push(key);
	  	}
	}
	return lst;
}

//генерация сетеров для неизменяемых структур
function setImmutable(prop) {
	return function(value, item) {
		var props = properties(item), //получаем список всех свойств объекта
			copy = props.reduce(function(lst, next) {
				lst[next] = item[next];
				return lst;
			}, {}); 
		copy[prop] = value; //меняем на новое значение
		return copy;
	};
}

//генерация гетеров
function get(prop) {
	return function(item) {
		return item[prop];
	};
}

function Lens(getter, setter) {
	//Если передан 1 параметр, то это название свойства
	if (arguments.length == 1) {
		var property = arguments[0];
		getter = get(property);
		setter = setImmutable(property);
	}
    return {
		modify: function (func, item) {
			var value = getter(item);

			return setter(func(value), item);
		},
        compose: function (lens) {
            return Lens(get2, set2);

            function get2(item) {
                return lens.get(getter(item));
            }

            function set2 (value, item) {
                var innerValue = lens.set(value, getter(item));
                return setter(innerValue, item);
            }
        },
        get: getter,
        set: setter
    };
}

function lens(cmd) {
	var lenses = cmd.split('.')
					.map(pass1(Lens));

	return lenses.reduce(function(lst, next) {
		return lst.compose(next);
	});
}
//функция которая из переданной ей на вход функции делает такую,
//которая игнорирует все переданные ей аргументы, кроме первого
function pass1(func) {
	return function(x) {
		return func(x);
	};
}

module.exports = lens;