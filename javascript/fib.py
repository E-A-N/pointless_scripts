
def main():
    pre = 0
    num = 0
    ray = []
    for i in range(0,10):
        if len(ray) > 3:
            num = ray[i] + ray[i-1]
            ray.append(num)
        else:
            ray.append(i)
    return ray

if __name__ == "__main__":
    main();
